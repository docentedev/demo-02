
const pool = require('../connection')
const getAllPaises = async () => {
    try {
        const result = await pool.query('SELECT * FROM country')
        return result.rows
    } catch (error) {
        throw new Error(error)
    }
}

const getPaiseById = async (id) => {
    const query = {
        text: 'SELECT * FROM country WHERE id = $1',
        values: [id]
    }
    try {
        const result = await pool.query(query)
        return result.rows
    } catch (error) {
        throw new Error(error)
    }
}


const deletePais = async (id) => {
    const query = {
        text: 'DELETE FROM country WHERE id = $1',
        values: [id]
    }
    try {
        const result = await pool.query(query)
        return result.rows
    } catch (error) {
        throw new Error(error)
    }
}

module.exports = {
    getAllPaises,
    getPaiseById,
    deletePais
}