import Image from "next/image"

export const Header = () => (
  <header className="flex">
    <div className="flex flex-wrap items-center justify-between max-w-4xl p-6 mx-auto">
      {/* <Image
        src="/logo-dark.png"
        layout="fixed"
        height={45}
        width={158}
        loading="eager"
        priority
        alt={Config.alt.logoName}
      /> */}
    </div>
  </header>
)
