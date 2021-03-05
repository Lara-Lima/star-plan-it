import Link from 'next/link'
import { BiPlanet } from 'react-icons/bi'
import { BsStar } from 'react-icons/bs'
import { IoRocketOutline } from 'react-icons/io5'

export default function Home() {
  return (
    <div className="max-w-full flex flex-col justify-center items-center h-full mt-12">
      <div className="sm:px-6 md:px-12 xl:px-16">
        <section className="bg-customGray mt-12 rounded-2xl shadow-lg p-4">
          <ul className="py-4 flex flex-col items-center justify-between sm:flex-row">
            <ListItem
              icon={
                <IoRocketOutline size="6rem" style={{ color: '#FFF600' }} />
              }
              link="/albuns"
              title="Albuns"
              subtitle="Aqui você pode ver todos os Albuns disponibilizados pela API
                  Json PlaceHolder"
            />
            <ListItem
              icon={<BiPlanet size="6rem" style={{ color: '#FFF600' }} />}
              link="/postagens"
              title="Postagens"
              subtitle="Aqui você pode ver todos os Postagens disponibilizados pela API
                  Json PlaceHolder"
            />
            <ListItem
              icon={<BsStar size="6rem" style={{ color: '#FFF600' }} />}
              link="/todos"
              title="To do"
              subtitle="Aqui você pode ver todos os To do disponibilizados pela API
                  Json PlaceHolder"
            />
          </ul>
        </section>
      </div>
    </div>
  )
}

type ListItemProps = {
  icon: JSX.Element
  title: string
  subtitle: string
  link: string
}
function ListItem({ title, subtitle, link, icon }: ListItemProps) {
  return (
    <li>
      <Link href={link}>
        <div className="py-2 px-6 hover:bg-black hover:bg-opacity-50 rounded-2xl transition-all max-w-xs flex flex-col items-center justify-center">
          <h1 className="font-semibold flex flex-col items-center">
            <span className="ml-1 text-4xl text-customGray100">{title}</span>
            <div className="my-6">{icon}</div>
          </h1>
          <p className="self-center text-center text-customGray100">
            {subtitle}
          </p>
        </div>
      </Link>
    </li>
  )
}
