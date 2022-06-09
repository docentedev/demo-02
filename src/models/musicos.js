const pool = require('../connection')
const getAllMusicos = async () => {
    try {
        const result = await pool.query('SELECT * FROM musician')
        return result.rows
    } catch (error) {
        throw new Error(error)
    }
}

const getMusicoById = async (id) => {
    const query = {
        text: 'SELECT * FROM musician WHERE id = $1',
        values: [id]
    }
    try {
        const result = await pool.query(query)
        return result.rows[0]
    } catch (error) {
        throw new Error(error)
    }
}


const deleteMusico = async (id) => {
    const query = {
        text: 'DELETE FROM musician WHERE id = $1',
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
    getAllMusicos,
    getMusicoById,
    deleteMusico
}