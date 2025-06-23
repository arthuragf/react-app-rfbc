import Card from './components/Card'

function App() {
 return (
    <>
      <Card
        title="Google"
        img_src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
        description="The most popular search engine worldwide. Fast, accurate, and powered by cutting-edge AI."
        url="https://www.google.com"
      />

      <Card
        title="DuckDuckGo"
        img_src="https://duckduckgo.com/assets/logo_homepage.normal.v108.png"
        description="A privacy-focused search engine that doesn't track you. Simple and effective search results."
        url="https://duckduckgo.com"
      />
      <Card
        title="Brave"
        img_src="https://play-lh.googleusercontent.com/aP7LHNpjMJJxoR8jRPPdVPlISDNNkFBKKmdODDp0uRNlL3YTugEdNEcHJgKBeRV8eeuU"
        description="An independent search engine that puts privacy first and avoids relying on Big Tech."
        url="https://search.brave.com"
      />
    </>
)
}

export default App
