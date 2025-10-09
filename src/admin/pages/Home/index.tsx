import React from 'react';
import { Box, Card, CardBody, Typography, Link, Flex } from '@strapi/design-system';

const HomePage = () => {
  return (
    <Box padding={8}>
      <Flex direction="column" gap={6}>
        <Typography variant="alpha">👋 Welcome to Jigawa Farm Mechanisation Service</Typography>
        <Typography variant="epsilon">
          Manage your agricultural raw materials, inventory & analytics from one dashboard
        </Typography>

        <Card shadow="filterShadow">
          <CardBody>
            <Typography variant="beta">🚀 Quick Links</Typography>
            <ul style={{ marginTop: '1rem', lineHeight: '2rem' }}>
              <li>
                <Link href="https://jsmc.org.ng" isExternal>
                  🌍 Visit Company Website
                </Link>
              </li>
              <li>
                <Link href="https://docs.strapi.io" isExternal>
                  📖 Strapi Documentation
                </Link>
              </li>
            </ul>
          </CardBody>
        </Card>
      </Flex>
    </Box>
  );
};

export default HomePage;
