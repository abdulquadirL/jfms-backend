exports.clean = (record) => {
  const r = { ...record }
  delete r.id
  delete r.created_at
  delete r.updated_at
  delete r.published_at
  return r
}

exports.mapIds = (rows, map) =>
  rows.map(r => ({
    ...r,
    id: map[r.id] || r.id
  }))
