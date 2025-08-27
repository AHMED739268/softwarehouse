export default function Contact(){
  return (
    <section className="section bg-grayLight">
      <div className="container">
        <h1 className="section-title">تواصل معنا</h1>
        <form className="grid md:grid-cols-2 gap-4 max-w-3xl">
          <input className="border rounded-xl p-3" placeholder="الاسم" />
          <input className="border rounded-xl p-3" placeholder="البريد" />
          <textarea className="border rounded-xl p-3 md:col-span-2" rows={5} placeholder="رسالتك" />
          <button className="btn-primary md:col-span-2">إرسال</button>
        </form>
      </div>
    </section>
  )
}
