type herotext = {
  HeroHeadingText: string;
};

export default function Hero({ HeroHeadingText }: herotext) {
  return (
    <>

      <div className="bg-primary hero-section">
        <div className="container p-5">
          <div className="p-5">
            <h1 className="text-decoration-underline text-center text-white">
              {HeroHeadingText}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
