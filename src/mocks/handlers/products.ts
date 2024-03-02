import { HttpResponse, http } from 'msw';
import { Product } from '@/common/types';

const mockProducts: Product[] = [
  {
    code: '4136cd0b-d90b-4af7-b485-5d1ded8db001',
    image: 'https://m.media-amazon.com/images/I/41g9yMVDzDL.jpg',
    name: 'Ashby Sofa',
    price: 89500,
    discount: 0.5,
  },
  {
    code: '4136cd0b-d90b-4af7-b485-5d1ded8db002',
    image:
      'https://media.istockphoto.com/id/1293762741/photo/modern-living-room-interior-3d-render.jpg?s=612x612&w=0&k=20&c=iZ561ZIXOtPYGSzqlKUnLrliorreOYVz1pzu8WJmrnc=',
    name: 'Belvedere Hall Suite',
    price: 180000,
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
    code: '4136cd0b-d90b-4af7-b485-5d1ded8db004',
    image:
      'https://media.istockphoto.com/id/1329433253/photo/living-room-interior-have-cabinet-for-tv-and-leather-armchair-in-cement-room-with-concrete.jpg?s=612x612&w=0&k=20&c=7c6d4nmjON06aIl4MDOiKjBA13vIeTXJPTPwIR0w3ec=',
    name: 'Chesterfied Sofa',
    price: 95000,
    discount: 0.12,
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
    code: '4136cd0b-d90b-4af7-b485-5d1ded8db008',
    image:
      'https://media.istockphoto.com/id/1158575634/photo/interior-with-armchair-and-coffee-table-3d-rendering.jpg?s=612x612&w=0&k=20&c=eBrIx3t7p5yElgACCtkJ2Z0gUCTfBfjF_tWPRHU6cmw=',
    name: 'Louie Sofa',
    price: 115000,
    isNew: true,
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
    code: '4136cd0b-d90b-4af7-b485-5d1ded8db012',
    image:
      'https://media.istockphoto.com/id/1146540920/photo/blue-and-white-abstract-painting-and-mirror-in-wooden-frame-in-elegant-living-room-interior.jpg?s=612x612&w=0&k=20&c=SBls_w5sWdsHRAJsr2-HAyY4L8vfsY7JVAp8etquiJI=',
    name: 'Tiana Sofa',
    price: 220000,
    discount: 0.15,
  },
  {
    code: '4136cd0b-d90b-4af7-b485-5d1ded8db013',
    image:
      'https://media.istockphoto.com/id/520536109/photo/contemporary-elegant-luxury-living-room.jpg?s=612x612&w=0&k=20&c=B2qVuu2PPjkw_CebnOicutAJdSa9K_z5IB4TnZWOTY4=',
    name: 'Asgaard Sofa',
    price: 78000,
  },
];

export default [
  http.get('/products', ({ request }) => {
    const url = new URL(request.url);
    const offset = Number(url.searchParams.get('offset') ?? 8);
    const page = Number(url.searchParams.get('page'));
    const totalPages = Math.ceil(mockProducts.length / offset);

    return HttpResponse.json({
      data: mockProducts.slice((page - 1) * offset, page * offset),
      pagination: {
        total_records: mockProducts.length,
        current_page: page,
        total_pages: totalPages,
        next_page: page < totalPages ? page + 1 : null,
        prev_page: page > 1 ? page - 1 : null,
      },
    });
  }),

  http.get('/products/:code', ({ params }) => {
    const product = mockProducts.find(({ code }) => code === params.code);

    if (product) {
      return HttpResponse.json(product);
    }

    return new HttpResponse(null, { status: 404 });
  }),

  http.get('/products/:code/related', ({ request }) => {
    const url = new URL(request.url);
    const offset = Number(url.searchParams.get('offset') ?? 4);
    const page = Number(url.searchParams.get('page'));
    const totalPages = Math.ceil(mockProducts.length / offset);

    return HttpResponse.json({
      data: mockProducts.slice((page - 1) * offset, page * offset),
      pagination: {
        total_records: mockProducts.length,
        current_page: page,
        total_pages: totalPages,
        next_page: page < totalPages ? page + 1 : null,
        prev_page: page > 1 ? page - 1 : null,
      },
    });
  }),
];
