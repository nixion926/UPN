import { Button } from "@/components/ui/primitives";

export default function NotFound() {
  return (
    <section className="section notfound">
      <div className="container">
        <div className="notfound__code">4<em>0</em>4</div>
        <h2 className="mt-s">This page isn&apos;t <em>on the shelf.</em></h2>
        <p className="lead mt-s">The page you&apos;re looking for may have moved.</p>
        <div className="row mt" style={{ justifyContent: "center" }}>
          <Button href="/" arrow>Back home</Button>
          <Button href="/contact" variant="outline">Contact us</Button>
        </div>
      </div>
    </section>
  );
}
