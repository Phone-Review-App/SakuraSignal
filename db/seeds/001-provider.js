/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('provider').del()
  await knex('provider').insert([
    {
      id: 1, 
      name: 'Mobal',
      img_url: 'https://www.mobal.com/img/common/logo.svg',
      description: 'A US based company that offers Japan and International sim plans for both long-term and short-term stays. They guarantee that the majority of their profits go to charity. They also offer complete English-speaking support. They also offer a home wifi plan with a mobile hotspot plan.',
      english_support: true,
      site_url: 'https://www.mobal.com/'
    },
    {
      id: 2, 
      name: 'Docomo',
      img_url: 'https://www.docomo.ne.jp/english/images_osp/common/header/logo_header_01_pc.png',
      description: "NTT DOCOMO is Japan's largest telecommunications company. Their plans can include 5G. They offer home wifi via a 5G mobile hotspot. They offer an English support hotline.",
      english_support: true,
      site_url: 'https://www.docomo.ne.jp/english/product/?icid=CRP_en_common_header_to_CRP_en_PRD'
    },
    {
      id: 3, 
      name: 'AU',
      img_url: 'https://www.au.com/content/dam/au-com/common/icon/header_au_logo.svg',
      description: "AU is one of the most popular phone providers with physical locations all across Japan. Some stores even offer English interpretation services (check the website for a list of stores). They offer 5G plans and even a fibre optic home internet plan which also includes a tv plan and home phone.",
      english_support: true,
      site_url: 'https://www.au.com/english/mobile/'
    },
    {
      id: 4, 
      name: 'Softbank',
      img_url: 'https://www.softbank.jp/site/set/data/top/img/shared/logo-sb-white.png',
      description: "",
      english_support: true,
      site_url: 'https://www.softbank.jp/en/'
    },
    {
      id: 5, 
      name: 'Rakuten Mobile',
      img_url: '',
      description: '',
      english_support: true,
      site_url: ''
    },
    {
      id: 6, 
      name: 'LINEMO',
      img_url: '',
      description: '',
      english_support: false,
      site_url: ''
    },
    {
      id: 7, 
      name: 'Ymobile',
      img_url: '',
      description: 'English guide page, but no support.',
      english_support: false,
      site_url: 'https://www.ymobile.jp/'
    },
    {
      id: 8, 
      name: 'UQ Mobile',
      img_url: '',
      description: '',
      english_support: true,
      site_url: 'https://www.uqwimax.jp/'
    },
    {
      id: 9, 
      name: 'GTN Mobile',
      img_url: '',
      description: '',
      english_support: true,
      site_url: 'https://gtn-mobile.com/en/'
    },
  ]);
};
