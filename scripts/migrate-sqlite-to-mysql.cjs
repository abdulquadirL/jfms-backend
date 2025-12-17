const sqlite = require('./sqlite')
const mysqlConn = require('./mysql')
const { clean } = require('./utils')

module.exports = async ({ strapi }) => {
  const mysql = mysqlConn(strapi)

  console.log('🚀 Starting SQLite → MySQL migration')

  // Disable FK checks
  await mysql.raw('SET FOREIGN_KEY_CHECKS = 0')

  /**
   * 1️⃣ USERS
   */
  console.log('👤 Importing users...')
  const users = await sqlite('up_users')
  for (const u of users) {
    await mysql('up_users').insert(clean(u))
  }

  /**
   * 2️⃣ FILES (uploads)
   */
  console.log('🖼 Importing files...')
  const files = await sqlite('files')
  for (const f of files) {
    await mysql('files').insert(clean(f))
  }

  /**
   * 3️⃣ CONTENT TYPES
   */
  const contentTables = [
    'articles',
    'authors',
    'contacts',
    'pages',
  ]

  for (const table of contentTables) {
    console.log(`📦 Importing ${table}...`)
    const rows = await sqlite(table)

    for (const row of rows) {
      const record = clean(row)

      // Fix document_id type mismatch
      if (typeof record.document_id === 'string') {
        record.document_id = null
      }

      await mysql(table).insert(record)
    }
  }

  /**
   * 4️⃣ FILE RELATIONS
   */
  console.log('🔗 Importing file relations...')
  const fileLinks = await sqlite('files_related_mph')

  for (const link of fileLinks) {
    const exists = await mysql('files')
      .where({ id: link.file_id })
      .first()

    if (exists) {
      await mysql('files_related_mph').insert(link)
    }
  }

  /**
   * 5️⃣ AUTHOR ↔ USER RELATIONS
   */
  console.log('🔗 Importing author-user relations...')
  const authorLinks = await sqlite('authors_users_id_lnk')

  for (const link of authorLinks) {
    const user = await mysql('up_users')
      .where({ id: link.user_id })
      .first()

    if (user) {
      await mysql('authors_users_id_lnk').insert(link)
    }
  }

  // Enable FK checks
  await mysql.raw('SET FOREIGN_KEY_CHECKS = 1')

  console.log('✅ Migration completed successfully')
}
