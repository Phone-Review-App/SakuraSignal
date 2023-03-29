/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('table_name').del()
  await knex('table_name').insert([
    {
      id: 1, 
      name: 'Mobal',
      img_url: '',
      description: '',
      english_support: true
    },
    {
      id: 2, 
      name: 'Docomo',
      img_url: '',
      description: '',
      english_support: true
    },
    {
      id: 3, 
      name: 'AU',
      img_url: '',
      description: '',
      english_support: true
    },
    {
      id: 4, 
      name: 'Softbank',
      img_url: '',
      description: '',
      english_support: true
    },
    {
      id: 5, 
      name: 'Rakuten Mobile',
      img_url: '',
      description: '',
      english_support: true
    },
    {
      id: 6, 
      name: 'LINEMO',
      img_url: '',
      description: '',
      english_support: true
    },
    {
      id: 7, 
      name: 'Mobal',
      img_url: '',
      description: '',
      english_support: true
    },
    {
      id: 8, 
      name: 'Mobal',
      img_url: '',
      description: '',
      english_support: true
    },
    {
      id: 9, 
      name: 'Mobal',
      img_url: '',
      description: '',
      english_support: true
    },
  ]);
};
