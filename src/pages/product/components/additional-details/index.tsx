export default function AdditionalDetails() {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-center gap-5 md:gap-14 text-center text-2xl text-text-t">
        <div className="font-medium text-black">Description</div>
        <div>Additional Information</div>
        <div>Reviews [0]</div>
      </div>

      <div className="xl:px-24 py-9">
        <p className="text-justify text-text-t">
          Embodying the raw, wayward spirit of rock n roll, the Kilburn portable
          active stereo speaker takes the unmistakable look and sound of
          Marshall, unplugs the chords, and takes the show on the road.
          <br />
          <br />
          Weighing in under 7 pounds, the Kilburn is a lightweight piece of
          vintage styled engineering. Setting the bar as one of the loudest
          speakers in its class, the Kilburn is a compact, stout-hearted hero
          with a well-balanced audio which boasts a clear midrange and extended
          highs for a sound that is both articulate and pronounced. The analogue
          knobs allow you to fine tune the controls to your personal preferences
          while the guitar-influenced leather strap enables easy and stylish
          travel.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
        <img
          src="https://media.istockphoto.com/id/1186545523/photo/narrow-living-room.jpg?s=612x612&w=0&k=20&c=f26cCLhQ-bChR0iLRKJPh89EfUfMTzwXZzDgmeNDL0c="
          alt="image01"
          className="h-[348px] w-full object-cover rounded-lg"
        />
        <img
          src="https://m.media-amazon.com/images/I/41g9yMVDzDL.jpg"
          alt="image01"
          className="h-[348px] w-full object-cover rounded-lg"
        />
      </div>
    </div>
  );
}
