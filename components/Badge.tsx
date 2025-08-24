import Image from 'next/image'

export function Badge() {
  return (
    <section className="bg-white/10 rounded-xl p-8 backdrop-blur-md">
      <h2 className="text-2xl font-bold text-maize mb-4">Web Ring Badge</h2>
      <p className="text-white/90 mb-6">
        Add this badge to your website to show you&apos;re part of the Michigan Web Ring:
      </p>
      
      <div className="text-center mb-6">
        <a 
          href="https://michigan-webring.vercel.app" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block transition-transform hover:scale-110"
        >
          <Image 
            src="/images/michigan-logo.svg" 
            alt="Michigan Webring" 
            width={36} 
            height={50}
            className="mx-auto"
          />
        </a>
      </div>
      
      <div className="bg-black/30 rounded-lg p-4 overflow-x-auto">
        <pre className="text-sm text-white/90">
{`<a href="https://michigan-webring.vercel.app" 
   target="_blank" rel="noopener noreferrer">
    <img src="/michigan-logo.svg" 
         alt="Michigan Webring" 
         width="36" height="50">
</a>`}
        </pre>
      </div>
      
      <div className="mt-6">
        <h3 className="text-lg font-semibold text-maize mb-2">For React/Next.js:</h3>
        <div className="bg-black/30 rounded-lg p-4 overflow-x-auto">
          <pre className="text-sm text-white/90">
{`import Image from 'next/image'

export function MichiganBadge() {
  return (
    <a href="https://michigan-webring.vercel.app" 
       target="_blank" rel="noopener noreferrer">
      <Image 
        src="/michigan-logo.svg" 
        alt="Michigan Webring" 
        width={36} 
        height={50} 
      />
    </a>
  )
}`}
          </pre>
        </div>
      </div>
    </section>
  )
}