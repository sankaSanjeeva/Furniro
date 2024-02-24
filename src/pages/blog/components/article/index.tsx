import { CalendarIcon, TagIcon, UserIcon } from '@/assets/icons';
import { Button } from '@/common/components/ui/button';

export default function Article() {
  return (
    <div className="flex flex-col gap-4">
      <img
        src="https://images.unsplash.com/photo-1485988412941-77a35537dae4?q=80&w=2096&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        className="rounded-[10px]"
      />

      <ul className="flex gap-8 flex-wrap text-text-t">
        <li className="flex gap-2">
          <UserIcon />
          <span>Admin</span>
        </li>
        <li className="flex gap-2">
          <CalendarIcon />
          <span>14 Oct 2022</span>
        </li>
        <li className="flex gap-2">
          <TagIcon />
          <span>Wood</span>
        </li>
      </ul>

      <h3 className="font-medium text-3xl">
        Going all-in with millennial design
      </h3>

      <p className="text-text-t">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae
        ultricies leo integer malesuada nunc. In nulla posuere sollicitudin
        aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus
        imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a
        iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero.
        Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et
        ultrices neque ornare aenean euismod elementum.
      </p>

      <Button variant="link" className="w-fit py-0 h-auto">
        Read more
      </Button>
    </div>
  );
}
