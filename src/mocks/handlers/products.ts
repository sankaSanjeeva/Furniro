import { HttpResponse, http } from 'msw';
import { PaginationResponse, Product } from '@/common/types';

const mockProducts: Product[] = [
  {
    code: '4136cd0b-d90b-4af7-b485-5d1ded8db002',
    image:
      'https://media.istockphoto.com/id/1293762741/photo/modern-living-room-interior-3d-render.jpg?s=612x612&w=0&k=20&c=iZ561ZIXOtPYGSzqlKUnLrliorreOYVz1pzu8WJmrnc=',
    name: 'Belvedere Hall Suite',
    price: 180000,
  },
  {
    code: '4136cd0b-d90b-4af7-b485-5d1ded8db001',
    image: 'https://m.media-amazon.com/images/I/41g9yMVDzDL.jpg',
    name: 'Ashby Sofa',
    price: 89500,
    discount: 0.5,
  },
  {
    code: '4136cd0b-d90b-4af7-b485-5d1ded8db003',
    image:
      'https://media.istockphoto.com/id/968086564/photo/wooden-chairs-at-table-in-bright-open-space-interior-with-lamp-next-to-grey-couch-real-photo.jpg?s=612x612&w=0&k=20&c=TfE8sZbX_XC4yIYEaRAJHrdIWjZqvRx3Crn0ygcr-h0=',
    name: 'Beverly Sofa',
    price: 220000,
    discount: 0.3,
  },
  {
    code: '4136cd0b-d90b-4af7-b485-5d1ded8db008',
    image:
      'https://media.istockphoto.com/id/1158575634/photo/interior-with-armchair-and-coffee-table-3d-rendering.jpg?s=612x612&w=0&k=20&c=eBrIx3t7p5yElgACCtkJ2Z0gUCTfBfjF_tWPRHU6cmw=',
    name: 'Louie Sofa',
    price: 115000,
    isNew: true,
  },
  {
    code: '4136cd0b-d90b-4af7-b485-5d1ded8db004',
    image:
      'https://media.istockphoto.com/id/1329433253/photo/living-room-interior-have-cabinet-for-tv-and-leather-armchair-in-cement-room-with-concrete.jpg?s=612x612&w=0&k=20&c=7c6d4nmjON06aIl4MDOiKjBA13vIeTXJPTPwIR0w3ec=',
    name: 'Chesterfied Sofa',
    price: 95000,
    discount: 0.12,
  },
  {
    code: '4136cd0b-d90b-4af7-b485-5d1ded8db012',
    image:
      'https://media.istockphoto.com/id/1146540920/photo/blue-and-white-abstract-painting-and-mirror-in-wooden-frame-in-elegant-living-room-interior.jpg?s=612x612&w=0&k=20&c=SBls_w5sWdsHRAJsr2-HAyY4L8vfsY7JVAp8etquiJI=',
    name: 'Tiana Sofa',
    price: 220000,
    discount: 0.15,
  },
  {
    code: '4136cd0b-d90b-4af7-b485-5d1ded8db005',
    image:
      'https://media.istockphoto.com/id/943910360/photo/posters-in-cozy-apartment-interior.jpg?s=612x612&w=0&k=20&c=QzNjsxCNMcFNxpn4E2ocPvSU8Ud2S3B_mHyo5L-HOLo=',
    name: 'Darvi Sofa',
    price: 75000,
    isNew: true,
  },
  {
    code: '4136cd0b-d90b-4af7-b485-5d1ded8db006',
    image:
      'https://media.istockphoto.com/id/1357529193/photo/3d-rendering-of-a-cozy-living-room.jpg?s=612x612&w=0&k=20&c=l0cel7NC2iNNB9I7NBqOoiF9wpLiRFWdIDd8MCYFVqg=',
    name: 'Grace Sofa',
    price: 124000,
  },
  {
    code: '4136cd0b-d90b-4af7-b485-5d1ded8db007',
    image:
      'https://media.istockphoto.com/id/1386471399/photo/modern-living-room-interior-3d-render.jpg?s=612x612&w=0&k=20&c=XTxZqwAshg6Woda4pzUOnxd2Ro8HxROOrPDKz8GTvf4=',
    name: 'Leyard Sofa',
    price: 165000,
    discount: 0.4,
  },
  {
    code: '4136cd0b-d90b-4af7-b485-5d1ded8db009',
    image:
      'https://media.istockphoto.com/id/1329937916/photo/scandinavian-domestic-dining-room-interior.jpg?s=612x612&w=0&k=20&c=jblput4MEg7QLUCIffJguBXIg1qYHXrpowBoLuiUasM=',
    name: 'Meera Sofa',
    price: 90000,
    discount: 0.2,
  },
  {
    code: '4136cd0b-d90b-4af7-b485-5d1ded8db010',
    image:
      'https://media.istockphoto.com/id/1344026356/photo/cozy-patio-with-entrance-to-the-house.jpg?s=612x612&w=0&k=20&c=5bfPR0cxmrOFjYUpxJ3S6_6XikUoJh9GdAafHDClwdI=',
    name: 'Ovya Sofa',
    price: 85000,
  },
  {
    code: '4136cd0b-d90b-4af7-b485-5d1ded8db011',
    image:
      'https://media.istockphoto.com/id/1191254429/photo/modern-scandinavian-living-room-interior-3d-render.jpg?s=612x612&w=0&k=20&c=DFQciAbGIbvwXdTvnuIrV-_eyllvdsRwZtGPtOEVybw=',
    name: 'Rily Sofa',
    price: 89500,
  },
  {
    code: '4136cd0b-d90b-4af7-b485-5d1ded8db013',
    image:
      'https://media.istockphoto.com/id/520536109/photo/contemporary-elegant-luxury-living-room.jpg?s=612x612&w=0&k=20&c=B2qVuu2PPjkw_CebnOicutAJdSa9K_z5IB4TnZWOTY4=',
    name: 'Asgaard Sofa',
    price: 78000,
  },
  {
    code: '4136cd0b-d90b-4af7-b485-5d1ded8db014',
    image:
      'https://media.istockphoto.com/id/1182454305/photo/bohemian-living-room-interior-3d-render.jpg?s=612x612&w=0&k=20&c=0-ocZf1KjzxD1riEB_c6z8coPPHDc4KnZzjYwj85EBQ=',
    name: 'Lexington Sofa',
    price: 114000,
    isNew: true,
  },
  {
    code: '4136cd0b-d90b-4af7-b485-5d1ded8db015',
    image:
      'https://media.istockphoto.com/id/1300125969/photo/home-interior-mock-up-with-blue-sofa-wooden-table-and-decor-in-blue-living-room.jpg?s=612x612&w=0&k=20&c=tn5yXi6xa4C0aUDteTO2jg9e6iAFQTuf3scnQjVqg3o=',
    name: 'Winston Sofa',
    price: 60000,
    discount: 0.08,
  },
  {
    code: '4136cd0b-d90b-4af7-b485-5d1ded8db016',
    image:
      'https://media.istockphoto.com/id/1098281948/photo/books-and-vases-on-retro-cabinet-next-to-comfortable-sofa-with-pillows.jpg?s=612x612&w=0&k=20&c=BVxeNKeQeArPO4_y5uiC7cDW_EaVpBqoA9oM_-8ClzE=',
    name: 'Florida Sofa',
    price: 88000,
  },
  {
    code: '4136cd0b-d90b-4af7-b485-5d1ded8db017',
    image:
      'https://media.istockphoto.com/id/1184204517/photo/modern-scandinavian-living-room-interior-3d-render.jpg?s=612x612&w=0&k=20&c=t-YDtX8DWp_ZL8FMWErVBH1D7Dc8yYe7jL-iIPKpX7g=',
    name: 'Clifton Sofa',
    price: 96000,
    isNew: true,
  },
  {
    code: '4136cd0b-d90b-4af7-b485-5d1ded8db018',
    image:
      'https://media.istockphoto.com/id/1199241746/photo/dark-colorful-home-interior-with-retro-furniture-mexican-style-living-room.jpg?s=612x612&w=0&k=20&c=0Sk7OPzda12-2GpmpbKfUYc31NtXmPVMmWvlLAu4CE0=',
    name: 'Clancy Sofa',
    price: 88000,
  },
  {
    code: '4136cd0b-d90b-4af7-b485-5d1ded8db019',
    image:
      'https://media.istockphoto.com/id/1325867076/photo/modern-interior-of-living-room-with-design-modular-beige-sofa-and-accessories-template.jpg?s=612x612&w=0&k=20&c=2GAzLpRwoG0UzljF9QABMZN4OKqE1hoh9Xph3aoLNbY=',
    name: 'Hawai Sofa',
    price: 92000,
  },
];

export default [
  http.get('/products', ({ request }) => {
    const url = new URL(request.url);
    const offset = Number(url.searchParams.get('offset') ?? 8);
    const page = Number(url.searchParams.get('page') ?? 1);
    const sortBy = url.searchParams.get('sortBy');
    const pages = Math.ceil(mockProducts.length / offset);

    return HttpResponse.json<PaginationResponse<Product>>({
      data: mockProducts
        .sort((a, b) => {
          if (sortBy === 'name') {
            return a.name > b.name ? 1 : -1;
          }
          if (sortBy === 'price') {
            return a.price - b.price;
          }
          return 0;
        })
        .slice((page - 1) * offset, page * offset),
      pagination: {
        totalRecords: mockProducts.length,
        currentPage: page,
        totalPages: pages,
        nextPage: page < pages ? page + 1 : null,
        prevPage: page > 1 ? page - 1 : null,
      },
    });
  }),

  http.get('/products/:code', ({ params }) => {
    const product = mockProducts.find(({ code }) => code === params.code);

    if (product) {
      return HttpResponse.json<Product>(product);
    }

    return new HttpResponse(null, { status: 404 });
  }),

  http.get('/products/:code/related', ({ request }) => {
    const url = new URL(request.url);
    const offset = Number(url.searchParams.get('offset') ?? 4);
    const page = Number(url.searchParams.get('page') ?? 1);
    const pages = Math.ceil(mockProducts.length / offset);

    return HttpResponse.json<PaginationResponse<Product>>({
      data: mockProducts.slice((page - 1) * offset, page * offset),
      pagination: {
        totalRecords: mockProducts.length,
        currentPage: page,
        totalPages: pages,
        nextPage: page < pages ? page + 1 : null,
        prevPage: page > 1 ? page - 1 : null,
      },
    });
  }),
];
