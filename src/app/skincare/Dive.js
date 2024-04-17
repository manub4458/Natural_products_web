"use client"
import React, { useState } from 'react'

const Dive = () => {
   const [isVisible, setIsVisible] = useState(false);

   const toggleVisibility = () => {
      setIsVisible(!isVisible);
   };
   return (
      <>
         <div>

            <div className='grid justify-center'>
               <button
                  className="border bg-[#db5f7a] hover:bg-[#d74f6d] text-white armen text-xl    font-semibold w-fit py-2 px-4 rounded "
                  onClick={toggleVisibility}
               >
                  {isVisible ? 'Lets Dive into our SkinCare products' : 'Lets Dive into our SkinCare products'}
               </button>

               <div>
                  {isVisible && (
                     <div className="mt-4 leading-8 w-[70vw] border armen border-[#dfc9ce] rounded-md p-6 ">

                        <li>
                           1.	<strong>Cleansing Milk:</strong> Gently removes dirt and makeup while nourishing the skin with natural ingredients like milk and herbs.
                        </li>
                        <li>
                           2. <strong>Neem Face Wash: </strong> Purifies the skin and controls acne with the antibacterial properties of neem, leaving it clear and refreshed.
                        </li>

                        <li>
                           3. <strong>Turmeric Face Scrub:  </strong> Exfoliates dead skin cells and brightens the complexion with the healing power of turmeric.
                        </li>
                        <li>
                           4. <strong>Rosewater Toner:</strong> Hydrates and tones the skin, restoring its natural pH balance and soothing irritation.
                        </li>
                        <li>
                           5. <strong>Sandalwood Face Pack:  </strong> Calms inflammation and tightens pores, leaving the skin smooth and rejuvenated with the natural properties of sandalwood.
                        </li>
                        <li>
                           6. <strong>Aloe Vera Gel: </strong> Soothes sunburns and hydrates dry skin with the cooling properties of aloe vera.
                        </li>

                        <li>
                           7. <strong>Kumkumadi Serum: </strong> Brightens and evens out skin tone, reducing dark spots and pigmentation with saffron and other Ayurvedic herbs.
                        </li>
                        <li>
                           8. <strong>Hyaluronic Acid Serum:  </strong> Hydrates and plumps the skin, reducing fine lines and wrinkles for a youthful appearance.
                        </li>
                        <li>
                           9. <strong>Licorice Brightening Cream:  </strong> Lightens dark spots and hyperpigmentation with the natural brightening properties of licorice root.
                        </li>
                        <li>
                           10. <strong>Tea Tree Oil Spot Treatment:  </strong> Targets acne and blemishes with the antimicrobial properties of tea tree oil, promoting clear skin.
                        </li>

                        <li>
                           11. <strong>Vitamin C Serum: </strong> Boosts collagen production and protects the skin from environmental damage, revealing a radiant complexion with the aid of Ayurvedic ingredients.
                        </li>
                        <li>
                           12. <strong>Honey Moisturizer: </strong> Nourishes and hydrates the skin with the antibacterial and humectant properties of honey, leaving it soft and supple.
                        </li>
                        <li>
                           13. <strong>Cucumber Eye Gel: </strong> Reduces puffiness and dark circles around the eyes with the cooling and soothing properties of cucumber extract.
                        </li>
                        <li>
                           14. <strong>Sunscreen: </strong> Protects the skin from harmful UV rays with natural ingredients like zinc oxide and coconut oil, preventing sun damage.
                        </li>
                        <li>
                           15. <strong>Mint Lip Balm: </strong> Moisturizes and refreshes dry, chapped lips with the cooling sensation of mint.
                        </li>
                        <li>
                           16.	<strong>Papaya Enzyme Mask:</strong> Exfoliates dead skin cells and brightens the complexion with the natural enzymes found in papaya.
                        </li>
                        <li>
                           17.	<strong>Brahmi Hair Oil:</strong> Nourishes the scalp and promotes hair growth with the herb brahmi, preventing hair loss and dandruff.
                        </li>
                        <li>
                           18.	<strong>Coconut Body Scrub:</strong> Exfoliates and moisturizes the skin with coconut oil and brown sugar, leaving it smooth and hydrated.
                        </li>
                        <li>
                           19.	<strong>Hair Mask:</strong> Strengthens and conditions the hair with a blend of herbs like amla and shikakai, restoring its natural shine and vitality with Ayurvedic formulations.
                        </li>
                        <li>
                           20.	<strong>Tulsi Face Mist:</strong> Refreshes and tones the skin with the purifying properties of tulsi (holy basil), promoting a clear and radiant complexion.

                        </li>
                        <li>
                           21.	<strong>Sesame Oil Massage Oil:</strong> Nourishes and revitalizes the skin with the rich nutrients found in sesame oil, promoting relaxation and rejuvenation.

                        </li>

                        <li>
                           22.	<strong>Almond Under Eye Cream:</strong> Hydrates and brightens the delicate under-eye area with the nourishing properties of almond oil and vitamin E.

                        </li>
                        <li>
                           23.	<strong>Hair Oil:</strong> Stimulates hair growth and prevents premature graying with the herb bhringraj, promoting healthy, lustrous hair.

                        </li>
                        <li>
                           24.	<strong>Chandan Face Cream:</strong> Soothes and moisturizes the skin with the cooling properties of sandalwood, reducing inflammation and irritation.

                        </li>

                        <li>
                           25.	<strong>Jasmine Body Oil:</strong> Hydrates and nourishes the skin with the intoxicating fragrance of jasmine, promoting relaxation and well-being.

                        </li>

                        <li>
                           26.	<strong>Hair Tonic:</strong> Strengthens and revitalizes the hair follicles with a blend of herbs like amla and brahmi, preventing hair fall and breakage.

                        </li>
                        <li>
                           27.	<strong>Chamomile Facial Oil:</strong> Calms and soothes sensitive skin with the anti-inflammatory properties of chamomile, reducing redness and irritation.

                        </li>

                        <li>
                           28.	<strong>Foot Cream:</strong> Moisturizes and softens rough, dry feet with a blend of herbs and oils, promoting healthy, beautiful feet.

                        </li>

                        <li>
                           29.	<strong>Neem Hair Rinse:</strong> Cleanses and purifies the scalp with the antibacterial properties of neem, preventing dandruff and scalp infections.

                        </li>
                        <li>
                           30.	<strong>Hand Cream:</strong> Hydrates and nourishes dry hands with a blend of herbal extracts, leaving them soft, smooth, and moisturized.

                        </li>
                        <li>
                           31.	<strong>Body Wash:</strong> Cleanses and refreshes the skin with a blend of herbs and oils, promoting overall health and well-being.

                        </li>
                        <li>
                           32.	<strong>Jasmine Body Scrub:</strong> Exfoliates and nourishes the skin with the aromatic fragrance of jasmine, leaving it smooth, soft, and radiant.

                        </li>
                        <li>
                           33.	<strong>Hair Conditioner:</strong> Softens and detangles the hair with a blend of herbs and oils, promoting smooth, manageable hair.

                        </li>
                        <li>
                           34.	<strong>Cucumber Cooling Gel:</strong> Soothes and hydrates sunburned skin with the cooling properties of cucumber extract, relieving discomfort and redness.

                        </li>
                        <li>
                           35.	<strong>Herbal Soap:</strong> Cleanses and nourishes the skin with a blend of herbs and oils, promoting overall health and well-being.

                        </li>
                        <li>
                           36.	<strong>Rosehip Facial Oil:</strong> Hydrates and rejuvenates the skin with the antioxidant properties of rosehip oil, reducing signs of aging and promoting a youthful complexion with Ayurvedic benefits.

                        </li>
                        <li>
                           37.	<strong>Under Eye Cream:</strong> Hydrates and brightens the delicate under-eye area with the nourishing properties of almond oil and vitamin E, essential components of Ayurvedic skincare.

                        </li>
                        <li>
                           38.	<strong>Facial Mist:</strong> Refreshes and tones the skin with natural ingredients, promoting a clear and radiant complexion.

                        </li>

                        <li>
                           39.	<strong>Hair Serum:</strong> Nourishes and protects the hair with a blend of natural oils, promoting shine and manageability.

                        </li>

                        <li>
                           40.	<strong>Lip Scrub:</strong> Exfoliates and hydrates dry, chapped lips, leaving them soft, smooth, and plump.

                        </li>

                     </div>
                  )}
               </div>
            </div>

         </div>

      </>
   )
}

export default Dive