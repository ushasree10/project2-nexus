// FAQComponent.js

import React from 'react';
import Faq from 'react-faq-component';
import '../index.css'; 
import myimage from '../Images/faq-image.jpg'

const FAQComponent = () => {
  const data = {
    title: "Frequently asked questions",
    rows: [
      {
        title: "Lorem ipsum dolor sit amet,",
        content: "Lorem ipsum dolor sit amet, consectetur "
      },
      {
        title: "Nunc maximus, magna at ultricies elementum",
        content: "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam."
      },
      {
        title: "Curabitur laoreet, mauris vel blandit fringilla",
        content: "Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc"
      },
      {
        title: "Quelle est la version du package",
        content: "v1.0.5"
      },
      {
        title: "Comment puis-je commencer?",
        content: "Pour commencer, suivez les instructions d'installation dans la documentation."
      },
      {
        title: "Puis-je personnaliser l'apparence?",
        content: "Oui, vous pouvez personnaliser l'apparence en modifiant le CSS ou en utilisant les options de personnalisation fournies."
      },
    ]
  };

  return (
    <div className="faq-container">
      <div className="faq-image">
        {/* Replace 'your-image-path.jpg' with the actual image path */}
        <img src={myimage} alt="FAQ" />
      </div>
      <div className="faq-questions">
        <Faq data={data} />
      </div>
    </div>
  );
};

export default FAQComponent;
