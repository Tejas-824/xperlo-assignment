import { ABOUT_IMAGE } from '../constants/images';

const LOREM =
  'Sit amet consectetur adipisicing elit. Alias molestias dolore commodi soluta iusto, suscipit laboriosam, ullam sunt sed fugit vero, quibusdam incidunt numquam eligendi dicta dolor officiis porro voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo vitae eveniet soluta cumque? Iure porro, vel temporibus dolores ab laborum vitae! Necessitatibus vel culpa debitis excepturi perspiciatis modi quibusdam dolores?';

export const aboutIntro = {
  title: 'The Best Deals You Will Ever Find',
  body: LOREM,
};

export const aboutFeatures = [
  {
    id: 'feature-1',
    title: 'The Best Deals You Will Ever Find',
    body: LOREM,
    image: ABOUT_IMAGE,
    imageSide: 'left',
  },
  {
    id: 'feature-2',
    title: 'The Best Deals You Will Ever Find',
    body: LOREM,
    image: ABOUT_IMAGE,
    imageSide: 'right',
  },
];

export const aboutGallerySection = {
  title: 'The Best Deals You Will Ever Find',
  body: LOREM,
};

export const aboutGalleryImages = Array.from({ length: 10 }, (_, i) => ({
  id: `gallery-${i + 1}`,
  image: ABOUT_IMAGE,
}));