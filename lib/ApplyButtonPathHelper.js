export default class ApplyButtonPathHelper {
  constructor(opts = {}) {
    const queryParams = [];
    const basePath = '/apply-form';
    if (opts.home) {
      queryParams.push(`h=${opts.home}`);
    }
    if (opts.city) {
      if (opts.city === 'New York City') {
        var city = 'New York';
      } else if (opts.city === 'San Francisco Bay Area') {
        var city = 'San Francisco';
      } else {
        var city = opts.city;
      }
      queryParams.push(`c=${city}`);
    }
    if (opts.suiteType) {
      queryParams.push(`st=${opts.suiteType}`);
    }
    if (opts.partnerReferral) {
      queryParams.push(`partner=${opts.partnerReferral}`);
    }
    if (opts.email) {
      queryParams.push(`e=${btoa(opts.email)}`);
    }
    if (opts.phoneNumber) {
      queryParams.push(`p=${btoa(opts.phoneNumber)}`);
    }
    if (opts.name) {
      queryParams.push(`n=${btoa(opts.name)}`);
    }
    this.queryParams = queryParams.join('&');
    if (this.queryParams.length) {
      this.fullPath = `${basePath}/#${this.queryParams}`;
    } else {
      this.fullPath = basePath;
    }
  }
}
