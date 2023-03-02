import image1 from '../../assets/image/img1.jpeg'
import image2 from '../../assets/image/img2.jpeg'
import image3 from '../../assets/image/img3.jpeg'
import image4 from '../../assets/image/img4.jpeg'
import image5 from '../../assets/image/img5.png'
import image6 from '../../assets/image/img6.png'
import image7 from '../../assets/image/img7.png'

export const InitialState = {
  products: [
    {
      id: 1,
      categoryId: 1,
      categoryIdName: 'Футболка',
      name: 'AL PACINO T-SHIRT',
      price: '2500 ₽',
      image: image1,
      size: 'XS S M L XL XXL 3XL',
    },
    {
      id: 2,
      categoryId: 2,
      name: 'PULP FICTION HOODIE',
      categoryIdName: 'Худи',
      price: '2500 ₽',
      image: image2,
      size: 'XS S M L XL XXL 3XL',
    },
    {
      id: 3,
      categoryId: 4,
      name: 'AMARICAN PSYCHO T-SHIRT',
      categoryIdName: 'Футболка с росписью',
      price: '2500 ₽',
      image: image4,
      size: 'XS S M L XL XXL 3XL',
    },
    {
      id: 4,
      categoryId: 3,
      name: 'XXXTENTACION HOODIE',
      categoryIdName: 'Худи с росписью',
      price: '2500 ₽',
      image: image3,
      size: 'XS S M L XL XXL 3XL',
    },
    {
      id: 5,
      categoryId: 1,
      name: 'ANGELINA JOLIE T-SHIRT',
      categoryIdName: 'Футболка',
      price: '2500 ₽',
      image: image5,
      size: 'XS S M L XL XXL 3XL',
    },
    {
      id: 6,
      categoryId: 1,
      name: 'LIFE T-SHIRT',
      categoryIdName: 'Футболка',
      price: '2500 ₽',
      image: image6,
      size: 'XS S M L XL XXL 3XL',
    },
    {
      id: 7,
      categoryId: 1,
      name: 'FARFALLA T-SHIRT',
      categoryIdName: 'Футболка',
      price: '2500 ₽',
      image: image7,
      size: 'XS S M L XL XXL 3XL',
    },
    {
      id: 7,
      categoryId: 1,
      name: 'FARFALLA T-SHIRT',
      categoryIdName: 'Футболка',
      price: '2500 ₽',
      image: image7,
      size: 'XS S M L XL XXL 3XL',
    },
  ],
  categories: [
    {
      id: 1,
      name: 'Футболки',
    },
    {
      id: 2,
      name: 'Худи',
    },
    {
      id: 3,
      name: 'Футболки с росписью',
    },
    {
      id: 4,
      name: 'Худи с росписью',
    },
  ],
  card: [],
  viewProducts: [],
  likedProducts: [],
}
