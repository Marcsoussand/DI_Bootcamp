const knex = require('knex');

const db = knex({
    client: 'pg',
    connection: {
        host:'127.0.0.1',
        user:'postgres',
        password:'Tel1avi,',
        database: 'dvdrental'
    }
})

const getCustomer = () => {
    return db.select(
        'customer.customer_id',
        'customer.first_name',
        'customer.last_name',
        'customer.email',
        'address.address',
        'city.city',
        'country.country',
        'address.phone'

    )
    .from('customer')
    .orderBy('customer_id')
    .join('address',{'address.address_id':'customer.address_id'})
    .join('city',{'city.city_id':'address.city_id'})
    .join('country',{'country.country_id':'city.country_id'})
}

module.exports = {
    getCustomer
}