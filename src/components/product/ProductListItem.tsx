import React from 'react'
import "./ProductListItem.scss"
import Link from 'next/link'
import Image from 'next/image'
import headphoneImg from "../../../public/assets/product-xx59-headphones/desktop/image-category-page-preview.jpg"
import ProductLinkPrimaryButton from '../UI/productLinkPrimaryButton'

const ProductListItem = () => {
  return (
    <div className='productlistitem'>
      <Link href="/" className='back-link'>Go Back</Link>
      <div className="section_one">
        <div className="left">
          <Image src={headphoneImg} alt='headphoneImg'
          
            className='headphoneImg'
          >

          </Image>
        </div>
         <div className="right">
                      <div className="right-container">
                        
                          <h6 className="newproduct">New Product</h6>
                        
                        <h2>XX99 Mark II
Headphones </h2>
                        <p>The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.</p>
                        <ProductLinkPrimaryButton path="/" type="primary" />
                      </div>
                    </div>
      </div>
      <div className="section_two">
        <div className="left">
          <h4>Features</h4>
          <p>
            Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat. <br />
            <br />
            

The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.
          </p>
        </div>
        <div className="right">
          <h4>In the box</h4>
          <ul>
            <li><span>1x</span>headphone</li> <li><span>1x</span>headphone</li> <li><span>1x</span>headphone</li> <li><span>1x</span>headphone</li>
          </ul>
        </div>
      </div>
      <div className="section_three">

        <div className="left">
          <Image src={headphoneImg}  alt='img' className='image-left'></Image>
          <Image src={headphoneImg} alt='img' className='image-left'></Image>

        </div>
        <div className="right">
            <Image src={headphoneImg} alt='img' className='image-right'></Image>
        </div>
        

      </div>
      <div className="section_four">
        <h2>You May Also Like</h2>
        <div className="wrapper">

  
        <div className="like_product">
          <Image src={headphoneImg} alt='img' className='image'></Image>

          <h3>XX99 Mark 1</h3>
          <ProductLinkPrimaryButton path='/' type='primary' />
          </div>
          <div className="like_product">
          <Image src={headphoneImg} alt='img' className='image'></Image>

          <h3>XX99 Mark 1</h3>
          <ProductLinkPrimaryButton path='/' type='primary' />
        </div> <div className="like_product">
          <Image src={headphoneImg} alt='img' className='image'></Image>

          <h3>XX99 Mark 1</h3>
          <ProductLinkPrimaryButton path='/' type='primary' />
          </div>
          </div>
      </div>
    </div>
  )
}

export default ProductListItem;