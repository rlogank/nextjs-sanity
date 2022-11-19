import Alert from '../components/alert'
import Footer from '../components/footer'
import Meta from '../components/meta'

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen bg-darkest text-text flex items-center justify-center w-full">
        <Alert preview={preview} />
        <main>{children}</main>
      </div>
      {/* <Footer /> */}
    </>
  )
}
