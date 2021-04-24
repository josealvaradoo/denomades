import HttpRequest from './http-request'

class ActivityService extends HttpRequest {
  /*
	 * -------------------------------------------------------------------
	 * Get all activies from the denomades API
	 * [GET] /activities
	 *
	 * -------------------------------------------------------------------
	*/
  async getAll() {
    this.setEndpoint('activities')
    const response = await this.get()
    return response
  }
}

export default ActivityService
