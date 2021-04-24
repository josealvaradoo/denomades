import axios from 'axios'

class HttpRequest {
  constructor() {
    this.endpoint = ''
    this.response = {
      data: null,
      code: 200,
      success: true,
      message: '',
      error: '',
    }
  }

  setEndpoint(endpoint) {
    this.endpoint = endpoint
  }

  setResponse(response) {
    this.response = {
      ...this.response,
      ...response,
    }
  }

  /*
	 * -------------------------------------------------------------------
	 * Gets either all or one resource from an endpoint given
	 *
	 * -------------------------------------------------------------------
	*/
  async get(id = null) {
    try {
      let response = null
      if (id) {
        response = await axios.get(`${process.env.API_URI}/${this.endpoint}/${id}`, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
      } else {
        response = await axios.get(`${process.env.API_URI}/${this.endpoint}`, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
      }

      this.setResponse({
        data: response?.data,
        code: 200,
      })

      return this.response
    } catch (err) {
      console.log(err?.message)
      this.setResponse({
        data: id === null ? [] : null,
        error: err?.message,
        success: false,
        code: 500,
      })

      return this.response
    }
  }

  /*
	 * -------------------------------------------------------------------
	 * Creates a resource with a data given from a specified endpoint
	 *
	 * -------------------------------------------------------------------
	*/
  async post(data) {
    try {
      const response = await axios.post(`${process.env.API_URI}/${this.endpoint}`, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      })

      this.setResponse({
        data: response?.data,
        code: 201,
      })

      return this.response
    } catch (err) {
      console.log(err?.message)
      this.setResponse({
        data: null,
        error: err?.message,
        success: false,
        code: 500,
      })

      return this.response
    }
  }

  /*
	 * -------------------------------------------------------------------
	 * Updates a resource by the ID, with a data given from a specified
	 * endpoint
	 *
	 * -------------------------------------------------------------------
	*/
  async put(id, data) {
    try {
      const response = await axios.put(`${process.env.API_URI}/${this.endpoint}/${id}`, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      })

      this.setResponse({
        data: response?.data,
        code: 200,
      })

      return this.response
    } catch (err) {
      console.log(err?.message)

      this.setResponse({
        data: null,
        error: err?.message,
        success: false,
        code: 500,
      })

      return this.response
    }
  }

  /*
	 * -------------------------------------------------------------------
	 * Deletes a resource by the ID from a specified endpoint
	 *
	 * -------------------------------------------------------------------
	*/
  async delete(id) {
    try {
      const response = await axios.delete(`${process.env.API_URI}/${this.endpoint}/${id}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      })

      this.setResponse({
        data: response?.data,
        code: 200,
      })

      return this.response
    } catch (err) {
      console.log(err?.message)

      this.setResponse({
        data: null,
        error: err?.message,
        success: false,
        code: 500,
      })

      return this.response
    }
  }
}

export default HttpRequest
