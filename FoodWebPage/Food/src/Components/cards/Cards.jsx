import React from 'react';
import styles from '../cards/Cards.module.css';

function Cards() {
  const cardsData = [
    { text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, illum optio nemo aspernatur a tenetur maxime voluptas officia, aut quidem cumque rerum modi eaque tempora suscipit veritatis quaerat sed ea sunt fugiat eum amet doloribus tempore id. Voluptate exercitationem distinctio quisquam! Rem quo tenetur cumque repellat cum laboriosam, ipsam explicabo.", name: "John Doe", designation: "CEO" },
    { text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, illum optio nemo aspernatur a tenetur maxime voluptas officia, aut quidem cumque rerum modi eaque tempora suscipit veritatis quaerat sed ea sunt fugiat eum amet doloribus tempore id. Voluptate exercitationem distinctio quisquam! Rem quo tenetur cumque repellat cum laboriosam, ipsam explicabo.", name: "Jane Smith", designation: "Manager" },
    { text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, illum optio nemo aspernatur a tenetur maxime voluptas officia, aut quidem cumque rerum modi eaque tempora suscipit veritatis quaerat sed ea sunt fugiat eum amet doloribus tempore id. Voluptate exercitationem distinctio quisquam! Rem quo tenetur cumque repellat cum laboriosam, ipsam explicabo.", name: "Alice Johnson", designation: "Manager" },
    { text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, illum optio nemo aspernatur a tenetur maxime voluptas officia, aut quidem cumque rerum modi eaque tempora suscipit veritatis quaerat sed ea sunt fugiat eum amet doloribus tempore id. Voluptate exercitationem distinctio quisquam! Rem quo tenetur cumque repellat cum laboriosam, ipsam explicabo.", name: "Bob Brown", designation: "Head Chef" },
    { text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, illum optio nemo aspernatur a tenetur maxime voluptas officia, aut quidem cumque rerum modi eaque tempora suscipit veritatis quaerat sed ea sunt fugiat eum amet doloribus tempore id. Voluptate exercitationem distinctio quisquam! Rem quo tenetur cumque repellat cum laboriosam, ipsam explicabo.", name: "Emily Davis", designation: "CEO" },
    { text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, illum optio nemo aspernatur a tenetur maxime voluptas officia, aut quidem cumque rerum modi eaque tempora suscipit veritatis quaerat sed ea sunt fugiat eum amet doloribus tempore id. Voluptate exercitationem distinctio quisquam! Rem quo tenetur cumque repellat cum laboriosam, ipsam explicabo.", name: "Michael Wilson", designation: "CEO" }
  ];

  return (
    <div className={styles.cardsContainer}>
      {cardsData.map((card, index) => (
        <div key={index} className={styles.card}>
          <div className={styles.cardText}>{card.text}</div>
          <div className={styles.cardDetails}>
            <div>{card.name}</div>
            <div>{card.designation}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
