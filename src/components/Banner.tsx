
const Banner = () => {
  return (
    <section className="mt-10">
      <div className="container">
        <div className="relative h-55 pt-10">
          <div className="flex items-center justify-center h-full mt-[10%] rounded-[40px]">
            <img className="absolute top-0 w-full" src="/images/bg_assets/crystall_trees-2.png" alt="Crystall trees banner" />
            <div className="absolute top-85 w-[calc(100%-20px)] h-20 blur-md"></div>
          </div>
          <div className="w-full h-100 bg-banner-bg rounded-[40px]">
            <h1 className="font-jersey mt-1 text-8xl text-banner-light"></h1>

          </div>


        </div>
      </div>
    </section>
  )
}

export default Banner