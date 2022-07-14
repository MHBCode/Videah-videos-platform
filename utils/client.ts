import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: 'akccrnr8',
  dataset: 'production',
  apiVersion: '2022-03-12',
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});
