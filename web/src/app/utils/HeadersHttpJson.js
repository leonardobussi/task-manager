
import { HttpHeaders } from '@angular/common/http';

// localStorage.setItem('token', 'pX7A585odhSSyyZ8awcs')

var token = 'pX7A585odhSSyyZ8awcs'

export default function headersHttpJson(){

  token = localStorage.getItem('token');

  return new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': token
  })
}