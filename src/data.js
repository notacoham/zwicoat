import img1 from './assets/images/publications/publication-1.jpeg';
import img2 from './assets/images/publications/publication-2.jpeg';
import img3 from './assets/images/publications/publication-3.jpeg';
import img4 from './assets/images/publications/publication-4.jpeg';
import img5 from './assets/images/publications/publication-5.jpeg';
import img6 from './assets/images/publications/publication-6.jpeg';

import coverImg1 from './assets/images/publications/publications-img-cover-1.png';
import coverImg2 from './assets/images/publications/publications-img-cover-2.png';
import coverImg3 from './assets/images/publications/publications-img-cover-3.png';
import coverImg4 from './assets/images/publications/publications-img-cover-4.png';
import coverImg5 from './assets/images/publications/publications-img-cover-5.png';
import coverImg6 from './assets/images/publications/publications-img-cover-6.png';

import teamImg1 from './assets/images/personel-photos/LelandHansen-compressed.jpg';
import teamImg2 from './assets/images/personel-photos/allanguymon-compressed.jpg';
import teamImg3 from './assets/images/personel-photos/hansenmr-edited.jpg';
import teamImg4 from './assets/images/personel-photos/kameronHansen-edited.jpg';

export const team = [
  {
    id: 1,
    img: teamImg1,
    name: 'Leland G. Hansen, JD',
    title: 'Executive Chairman',
    bio: `Leland Hansen is a co-founder of ZwiCoat and an intellectual property attorney with a diverse practice that encompasses a wide range of technologies, including medical devices, angioplasty catheters, stents, and surgical equipment. He has served as lead counsel in numerous high-stakes cases before federal district courts, the International Trade Commission, and the Federal Circuit Court of Appeals. Leland's expertise extends to contested proceedings at the United States Patent and Trademark Office, where he has navigated complex reexaminations and inter partes reviews. Additionally, he has played a pivotal role in alternative dispute resolution proceedings such as mediation and binding arbitration on both domestic and international fronts. Beyond litigation, Leland provides strategic counsel on contract negotiation and due diligence for mergers and acquisitions, advising clients on intellectual property portfolio valuation and development strategies that drive innovation.`,
  },
  {
    id: 2,
    img: teamImg2,
    name: 'C. Allan Guymon, PhD',
    title: 'Chief Scientific Officer',
    bio: `Dr. C. Allan Guymon is a co-founder of ZwiCoat and a co-inventor of the company's zwitterionic coating technology. With over thirty years of experience as a leader in photopolymerization, Dr. Guymon has made significant contributions to the field of chemical engineering, particularly in the areas of photopolymerization kinetics, polymer nanostructure formation, and the development of advanced materials for biomedical applications. Dr. Guymon was the Chair of the Chemical and Biochemical Engineering Department at the University of Iowa, where he led and shaped the department's academic and research initiatives, and currently serves as a professor of chemical engineering at Brigham Young University. His distinguished career includes numerous awards, such as the Presidential Early Career Award for Scientists and Engineering (PECASE) and the National Science Foundation CAREER Award. His work has resulted in over 80 peer-reviewed publications and multiple patents.`,
  },
  {
    id: 3,
    img: teamImg3,
    name: 'Marlan R. Hansen, MD',
    title: 'Chief Medical Officer',
    bio: 'Dr. Marlan Hansen is a co-founder of ZwiCoat and a co-inventor of the company’s zwitterionic coating technology. In 2015, he co-founded iotaMotion, a company dedicated to developing advanced robotic-assisted systems for cochlear implant surgery, which is now expanding into international markets. As an expert clinician-scientist trained in neurotology and skull base surgery, as well as cell and molecular neurobiology, Dr. Hansen holds the position of Brian F. McCabe Distinguished Chair and DEO  of Otolaryngology at the University of Iowa, where he is also a Professor of Neurosurgery and Molecular Physiology & Biophysics. His clinical practice focuses on cochlear implants and intricate surgeries of the inner ear and skull base, where he combines his extensive surgical expertise with a commitment to advancing medical technology for improved patient outcomes. His work has resulted in over 100 peer-reviewed publications and multiple patents.',
  },
  {
    id: 4,
    img: teamImg4,
    name: 'Kameron R. Hansen, PhD',
    title: 'President and Chief Technology Officer',
    bio: `Dr. Kameron Hansen is the President and Cheif Technology Officer of ZwiCoat and a research scientist trained in physics and materials chemistry. He earned a B.S. degree in physics from Brigham Young University, an M.S. degree in chemical physics from Columbia University, and a Ph.D. in physical chemistry from the University of Utah. His research on charge-transport in thin materials resulted in over 30 peer-reviewed publications, the Cheves T. Walling Graduate Research Award, and the prestigious Graduate Research Fellowship Program (GRFP). His proposal for applying zwitterionic coatings to medical devices was awarded by the NIH, resulting in SBIR funding to develop and commercialize zwitterionic coatings.`,
  },
];

export const publications = [
  {
    id: 1,
    img: img1,
    coverImg: coverImg1,
    title:
      'Photografted Zwitterionic Hydrogel Coating Durability for Reduced Foreign Body Response to Cochlear Implants',
    authors:
      'Adreann Peel, Douglas Bennion, Ryan Horne, Marlan R. Hansen, C. Allan Guymon',
    journal: 'ACS Applied Bio Materials, 2024',
    summary:
      'This study examines the durability of photografted zwitterionic hydrogel coatings on cochlear implants, and their antifouling capabilities during insertion and long-term use. The research shows that these coatings significantly reduce frictional resistance and insertion force, leading to less trauma and scarring. The coatings maintain their enhanced lubricity and mechanical properties even after drying and rehydration, making them highly durable and effective in improving the performance and longevity of cochlear implants.',
    link: 'https://pubs.acs.org/doi/full/10.1021/acsabm.4c00156',
  },
  {
    id: 2,
    img: img2,
    coverImg: coverImg2,
    title:
      'Reducing the Foreign Body Response on Human Cochlear Implants and Their Materials In Vivo with Photografted Zwitterionic Hydrogel Coatings',
    authors:
      'Ryan Horne, Nir Ben-Shlomo, Megan Jensen, Morgan Ellerman, Caleb Escudero, Rong Hua, Douglas Bennion, C. Allan Guymon, Marlan R. Hansen',
    journal: 'Acta Biomaterialia, 2023',
    summary:
      'This study investigates the effectiveness of zwitterionic coatings in reducing the foreign body response on cochlear implants. After 1 year of implantation in mice, the zwitterionic coatings withhold their structural integrity while maintaining their anti-fouling properties. The coated cochlear implants show significantly reduce fibrotic capsule thickness and inflammation.',
    link: 'https://www.sciencedirect.com/science/article/abs/pii/S1742706123002581?via%3Dihub',
  },
  {
    id: 3,
    img: img3,
    coverImg: coverImg3,
    title:
      '​​Zwitterionic Photografted Coatings of Cochlear Implant Biomaterials Reduce Friction and Insertion Forces',
    authors:
      'Douglas M. Bennion, Ryan Horne, Adreann Peel, Parker Reineke, Allan Henslee, Christopher Kaufmann, C. Allan Guymon, Marlan R. Hansen',
    journal: 'Otology & Neurotology, 2021',
    summary:
      'This study demonstrates that photografted zwitterionic coatings on cochlear implant materials significantly reduce friction and insertion forces, leading to less trauma during implantation. The coatings achieved over a 90% reduction in frictional coefficients and a 40% reduction in insertion forces, suggesting improved outcomes for patients receiving cochlear implants. These findings support the potential for zwitterionic coatings to enhance the performance and safety of neuroprosthetic devices.',
    link: 'https://journals.lww.com/otology-neurotology/abstract/2021/12000/zwitterionic_photografted_coatings_of_cochlear.11.aspx',
  },
  {
    id: 4,
    img: img4,
    coverImg: coverImg4,
    title:
      'Antifouling Photograftable Zwitterionic Coatings on PDMS Substrates',
    authors:
      'Braden L. Leigh, Elise Cheng, Linjing Xu, Alexis Derk, Marlan R. Hansen, C. Allan Guymon',
    journal: 'ACS Biomaterials Science & Engineering, 2019',
    summary:
      'This study explores the use of zwitterionic polymers to coat PDMS surfaces, aiming to reduce the foreign body response and fibrosis that compromise implant performance. The photografted coatings demonstrated strong adhesion and significantly reduced protein and fibroblast adhesion, showcasing their potential to improve the biocompatibility of medical implants. ',
    link: 'https://pubs.acs.org/doi/10.1021/acs.langmuir.8b00838',
  },
  {
    id: 5,
    img: img5,
    coverImg: coverImg5,
    title:
      'Antifouling and Mechanical Properties of Photografted Zwitterionic Hydrogel Thin-Film Coatings Depend on the Cross-Link Density​',
    authors:
      'Megan J. Jensen, Adreann Peel, Ryan Horne, Jamison Chamberlain, Linjing Xu, Marlan R. Hansen, C. Allan Guymon',
    journal: 'ACS Biomaterials Science & Engineering, 2021',
    summary:
      'This paper examines how varying the cross-link density of zwitterionic hydrogel thin films affects their antifouling and mechanical properties. The study found that optimal cross-link densities provide a balance between mechanical strength and reduced protein and cell adhesion, essential for improving the biocompatibility of implanted biomaterials. ',
    link: 'https://pubs.acs.org/doi/10.1021/acsbiomaterials.1c00852',
  },
  {
    id: 6,
    img: img6,
    coverImg: coverImg6,
    title:
      'Photograftable Zwitterionic Coatings Prevent Staphylococcus aureus and Staphylococcus epidermidis Adhesion to PDMS Surfaces​',
    authors:
      'Na Shen, Elise Cheng, John W. Whitley, Ryan R. Horne, Braden Leigh, Linjing Xu, Bradley D. Jones, C. Allan Guymon, Marlan R. Hansen',
    journal: 'ACS Applied Bio Materials, 2021',
    summary:
      'This study investigates the effectiveness of zwitterionic coatings in preventing bacterial adhesion to PDMS surfaces, particularly against Staphylococcus aureus and Staphylococcus epidermidis. The results showed significant reductions in bacterial adhesion and growth in both in vitro and in vivo models, highlighting the potential of these coatings to prevent infections in medical implants. ',
    link: 'https://pubs.acs.org/doi/10.1021/acsabm.0c01147',
  },
];
