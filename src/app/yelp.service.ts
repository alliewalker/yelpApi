import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { BASE_URL } from '../environments/environment.prod';

const BASE_URL = 'https://api.yelp.com/v3/businesses/search?'
const API_KEY = 'I8k-G6JpgLLuVEsgVVvxMv3xWPd6co6sTvSWBHQw3XMV2TLJzwzFCaNlQ9lUeEg1ZpQ7rjAEk26lhEPAlzUURygdxiZYYYBu3UQPhWoiSKiT3Amn7x3GqSuKcOB2XHYx'

@Injectable({
  providedIn: 'root'
})
export class YelpService {

  constructor(private http: HttpClient) { }

  
}
