import React from "react"
import { useRouter } from "next/router"
import Layout from "../../components/Layout"
import { useDispatch } from "react-redux"
import { toevoegen } from "../../redux/actions"
import Link from "next/link"
import { serverRuntimeConfig } from "../../next.config"
import products from "../../data/producten"
import Image from "next/image"

const Product = ({ producten }) => {
  const router = useRouter()
  const dispatch = useDispatch()

  const interesse = producten.slice(0, 4)

  const artikel = producten.filter(x => String(x._id) === router.query._id)
  return (
    <Layout>
      <div className="product sm:py-4 py-14">
        <div className="product__columns grid md:grid-cols-6">
          <div className="product__linkercolumn md:col-span-3">
            <div className="product__hoofdfoto w-full">
              <Image className="product__foto cursor-pointer" src={`${artikel[0].imageUrl}`} width="800" height="800" alt={artikel.naam} />
            </div>
            <div className="product__tweedefoto hidden sm:block">
              <Image className="product__foto cursor-pointer" src="https://www.loveissue.nl/wp-content/uploads/2019/09/babyaleiah_BIBS_houtenspeenkoord_sage5.jpg" width="800" height="800" alt={artikel.naam} />
            </div>
            <div className="product__derdefoto hidden sm:block">
              <Image className="product__fotocursor-pointer" src="https://www.loveissue.nl/wp-content/uploads/2019/09/babykyan_speenkoord_vlecht_katoen_ecrustripe.jpg" width="800" height="800" alt={artikel.naam} />
            </div>
          </div>
          <div className="product__rechtercolumn md:col-span-3">
            <div className="sticky top-40 z-0 px-12">
              <div className="product__titel mt-10 md:mt-0">
                <h1 className="text-2xl text-center">{artikel[0].naam}</h1>
                <p className="text-lg text-center mt-5">{artikel[0].prijs}</p>
                <hr className="mt-8" />
                <div className="product__beschrijving">
                  <p className="mt-8" style={{ whiteSpace: "pre-line" }}>
                    {artikel[0].beschrijving}
                  </p>
                </div>
                <hr className="mt-8" />
                <div className="producht__kopen mt-8">
                  <form>
                    <input className="form-checkbox" name="cadeau" type="checkbox" />
                    <label className="ml-3" htmlFor="cadeau">
                      Laten inpakken?
                    </label>

                    <button
                      onClick={e => {
                        e.preventDefault(), dispatch(toevoegen(artikel))
                      }}
                      className="w-full bg-black text-white p-2 mt-8"
                    >
                      Toevoegen
                    </button>
                    <button
                      onClick={e => {
                        e.preventDefault(), dispatch(toevoegen(artikel)), router.push("/winkelmand")
                      }}
                      className="w-full bg-gray-700 text-white p-2 mt-2"
                    >
                      Toevoegen & Afrekenen
                    </button>
                  </form>
                </div>
                <hr className="mt-8" />
                <h1 className="text-2xl text-center mt-8 uppercase">Misschien hou je ook van</h1>
                <div className="product__interesse grid grid-cols-2 gap-4 mt-8">
                  {interesse.map(x => (
                    <div key={x._id} className="col-span-1">
                      <Link href={`/${x.categorieurl}/${x._id}`}>
                        <img className="product__foto shadow cursor-pointer" src={`${x.imageUrl}`} alt="" />
                      </Link>
                      <div className="product__info mt-3">
                        <Link href={`/${x.categorieurl}/${x.id}`}>
                          <span className="product__title hover:underline cursor-pointer">{x.naam}</span>
                        </Link>
                        <div className="product__prijs">
                          <span>{x.prijs}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const res = products
  const json = await res
  const producten = json

  // Pass post data to the page via props
  return { props: { producten } }
}

export async function getStaticPaths() {
  // Get the paths we want to pre-render based on posts
  const paths = products.map(product => `/${product.categorieurl}/${product._id}`)

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

// This also gets called at build time

export default Product
