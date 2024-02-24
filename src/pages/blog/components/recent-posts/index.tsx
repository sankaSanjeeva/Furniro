function Post() {
  return (
    <div className="flex gap-3">
      <img
        src="https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        className="h-20 w-20 object-cover rounded-[10px]"
      />

      <div className="my-auto">
        <div className="text-sm mb-1">Going all-in with millennial design</div>
        <div className="text-xs text-text-t">03 Aug 2022</div>
      </div>
    </div>
  );
}

export default function RecentPosts() {
  return (
    <div className="mt-24 px-5 flex flex-col gap-8">
      <h4 className="font-medium text-2xl text-black">RecentPosts</h4>

      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}
