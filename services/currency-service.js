import HttpRequest from './http-request'

class CurrencyService extends HttpRequest {
  /*
	 * -------------------------------------------------------------------
	 * Get all currency factors from denomades API
	 * [GET] /currencies
	 *
	 * -------------------------------------------------------------------
	*/
  async getAll() {
    this.setEndpoint('currencies')
    const response = await this.get()
    return response
  }
}

export default CurrencyService
