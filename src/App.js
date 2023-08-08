import { useState } from 'react';

import Header from './components/Header';
import Article from './components/Article';
import Footer from './components/Footer';

import './styles/App.css';

export default function App() {
  const [articles] = useState ([
    {
      date: '11/12/20',
      title: 'On the Street in Brooklyn',
      image: '/blog-image-1.jpg',
      imageDesc: 'Woman in red walking on the side walk looking down',
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit ipsam ratione sequi dolorum neque? Modi natus ullam dicta eaque voluptatem voluptates consequatur consectetur quasi incidunt magni recusandae, vel enim ut!'
    },
    {
      date: '11/11/20',
      title: 'Vintage in Vogue',
      image: '/blog-image-2.jpg',
      imageDesc: 'Three people in frame. Two people looking at camera and thired person looking to the left',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et consequuntur modi sunt. Minus unde fugit commodi tempora placeat illo. Repellat officia error tempora nesciunt perferendis. Ad harum a neque. Reprehenderit.'
    }
  ])
  
  
  return (
    <div className="App">
      <Header />
      <main>
        {Article.map(article => <Article article={article}/>)}
      </main>
      <Footer />
    </div>
  );
}

