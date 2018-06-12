import { Component, ElementRef, ViewChild, ViewContainerRef, OnInit,ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";
import { AuthService } from '../authentication/auth.service';
import { IFileContent } from '../models/interfaces';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Options } from 'selenium-webdriver';
import { ToastsManager } from 'ng2-toastr';
// import * as $ from 'jquery';
// import * as gantt from 'jquery.gantt'
declare var $: any;

@Component({
  selector: 'base64-upload',
  templateUrl: './base64-upload.component.html',
  styleUrls:['./base64-upload.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class Base64UploadComponent implements OnInit {
  //myControl: FormControl = new FormControl();
  public editor;
  public editorContent = `<h3>I am Example 02</h3>`;
  public editorConfig = {
    placeholder: "输入公告内容，支持html"
  };
  form: FormGroup;
  loading: boolean = false;
  image: string;
  fileToUpload: File = null;
  rawOptions = [
    'One',
    'Two',
    'Three'
  ];
  options = [];
  eventsData = [{
    "title": "Zaporojie Turu",
    "startdate": "2016/07/21",
    "enddate": "2016/07/26",
    "url": "http://www.example.com/1",
    "type": "Cruise",
    "minNight": "4",
    "price": {
        "original": {
            "price": 798.0000,
            "priceType": "EUR"
        },
        "converted": {
            "price": 2673,
            "priceType": "TL"
        }
    },
    "tooltipData": {
        "title": "Zaporojie Turu",
        "image": "http://cdn.gezinomi.com//zaporojie-turu-1126--1-29.06.2016101219-b4.jpg",
        "desc": ["Atlas Global Havayolları Tarifeli Seferi ile ", " Türkçe Rehber ", " Vizesiz ", " 3 Gece - 4 Gün ", " Zaporojie (3)"],
        "dates": {
            "begin": "21 ทดสอบภาษา 2016 Perşembe",
            "end": "24 Temmuz 2016 Pazar"
        },
        "url": null
    },
    "dateorder": "\/Date(1469048400000)\/"
}, {
    "title": "Amsterdam İlkbahar , Yaz Turu ",
    "startdate": "2016/07/21",
    "enddate": "2016/07/24",
    "url": "http://www.gezinomi.com/amsterdam-ilkbahar-yaz-turu",
    "type": "Tur",
    "minNight": "3",
    "price": {
        "original": {
            "price": 1098.0000,
            "priceType": "EUR"
        },
        "converted": {
            "price": 3678,
            "priceType": "TL"
        }
    },
    "tooltipData": {
        "title": "Amsterdam İlkbahar , Yaz Turu ",
        "image": "http://cdn.gezinomi.com//amsterdam-ilkbahar-yaz-turu-1987--1-16.3.2015155554-b4.jpg",
        "desc": ["Türk Havayolları Tarifeli Seferi ile ", " Türkçe Rehber ", " Vizeli ", " 3 Gece - 4 Gün ", " Amsterdam (3)"],
        "dates": {
            "begin": "21 Temmuz 2016 Perşembe",
            "end": "24 Temmuz 2016 Pazar"
        },
        "url": null
    },
    "dateorder": "\/Date(1469048400000)\/"
}, {
  "title": "Amsterdam İlkbahar , Yaz Turu ",
  "startdate": "2016/07/21",
  "enddate": "2016/07/24",
  "url": "http://www.gezinomi.com/amsterdam-ilkbahar-yaz-turu",
  "type": "TurBus",
  "minNight": "3",
  "price": {
      "original": {
          "price": 1098.0000,
          "priceType": "EUR"
      },
      "converted": {
          "price": 3678,
          "priceType": "TL"
      }
  },
  "tooltipData": {
      "title": "Amsterdam İlkbahar , Yaz Turu ",
      "image": "http://cdn.gezinomi.com//amsterdam-ilkbahar-yaz-turu-1987--1-16.3.2015155554-b4.jpg",
      "desc": ["Türk Havayolları Tarifeli Seferi ile ", " Türkçe Rehber ", " Vizeli ", " 3 Gece - 4 Gün ", " Amsterdam (3)"],
      "dates": {
          "begin": "21 Temmuz 2016 Perşembe",
          "end": "24 Temmuz 2016 Pazar"
      },
      "url": null
  },
  "dateorder": "\/Date(1469048400000)\/"
}];

datasource = {
  'name': 'Lao Lao',
  'title': 'general manager',
  'children': [
    { 'name': 'Bo Miao', 'title': 'department manager', 'className': 'middle-level',
      'children': [
        { 'name': 'Li Jing', 'title': 'senior engineer', 'className': 'product-dept' },
        { 'name': 'Li Xin', 'title': 'senior engineer', 'className': 'product-dept',
          'children': [
            { 'name': 'To To', 'title': 'engineer', 'className': 'pipeline1' },
            { 'name': 'Fei Fei', 'title': 'engineer', 'className': 'pipeline1' },
            { 'name': 'Xuan Xuan', 'title': 'engineer', 'className': 'pipeline1' }
          ]
        }
      ]
    },
    { 'name': 'Su Miao', 'title': 'department manager', 'className': 'middle-level',
      'children': [
        { 'name': 'Pang Pang', 'title': 'senior engineer', 'className': 'rd-dept' },
        { 'name': 'Hei Hei', 'title': 'senior engineer', 'className': 'rd-dept',
          'children': [
            { 'name': 'Xiang Xiang', 'title': 'UE engineer', 'className': 'frontend1' },
            { 'name': 'Dan Dan', 'title': 'engineer', 'className': 'frontend1' },
            { 'name': 'Zai Zai', 'title': 'engineer', 'className': 'frontend1' }
          ]
        }
      ]
    }
  ]
};

  constructor(private fb: FormBuilder, private auth: AuthService, private http: HttpClient,
    public toastr: ToastsManager, vcr: ViewContainerRef) {
      this.toastr.setRootViewContainerRef(vcr);

    
      
  }
  onEditorBlured(quill) {
    console.log('editor blur!', quill);
  }

  onEditorFocused(quill) {
    console.log('editor focus!', quill);
  }

  onEditorCreated(quill) {
    this.editor = quill;
    console.log('quill is ready! this is current quill instance object', quill);
  }

  onContentChanged({ quill, html, text }) {
    console.log('quill content is changed!', quill, html, text);
  }
  ngOnInit(): void {
    let self = this;
    $(document).ready(function(){
      console.log(self.eventsData);
        $('#demo').gantt({
        data: self.eventsData,
        startDate: new Date('2016-07-01'),
        endDate: new Date('2016-10-01'),
        onInit: function(){
          console.log('onInit');
        },
        onDestroy: function(){
          console.log('onDestroy');
        }
      }); 
      
    let nodeTemplate = (data)=> {
        return `
          <span class="office">${data.office}</span>
          <div class="title">${data.name}</div>
          <div class="content">${data.title}</div>
        `;
      };
    let  oc = $('#chart-container').orgchart({
        'data' : self.datasource,
        'nodeTemplate': nodeTemplate
      });
  });
    
  }
  Name: string;
  myFile: File; /* property of File type */
  fileChange(files: any) {
    console.log(files);

    this.myFile = files[0].nativeElement;
  }
  showSuccess() {    
    this.toastr.success('You are awesome!', 'Success!',{toastLife: 1000});
  }

  showError() {
    this.toastr.error('This is not good!', 'Oops!');
  }

  showWarning() {
    this.toastr.warning('You are being warned.', 'Alert!');
  }

  showInfo() {
    this.toastr.info('Just some information for you.');
  }
  
  showCustom() {
    this.toastr.custom('<span style="color: red">Message in red.</span>', null, {enableHTML: true});
  }
  onAutoChange(value: string) {
    if(value == '')
    this.options = [];
    else
    this.options = this.rawOptions.filter(f => f.toLowerCase().indexOf(value.toLowerCase()) > -1);
  }
  onAutoFocus(value: string) {
    if (value == '') {
      this.options = [];
    }
  }
  /* Now send your form using FormData */
  onSubmit(): void {
    let _formData = new FormData();
    _formData.append("Name", this.Name);
    _formData.append("MyFile", this.myFile);
    let body = _formData;
    //   let headers = new Headers();
    //   let options = new Options({
    //       headers: headers
    //   });
    const headers = new HttpHeaders({ 'Content-Type': 'application/X-www-form-urlencoded', 'enctype': 'multipart/form-data' });
    this.http.post("http://localhost:585/api/values/upload", body, { headers: headers })
      .subscribe((data) => console.log(data));
  }
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    this.uploadFileToActivity();
  }

  uploadFileToActivity() {
    this.postFile(this.fileToUpload).subscribe(data => {
      // do something, if upload success
      console.log(data);
    }, error => {
      console.log(error);
    });
  }
  postFile(fileToUpload: File): Observable<any> {
    const endpoint = 'http://localhost:585/api/values/upload';
    let datatest = { data: 'request' };
    const headers = new HttpHeaders({ 'Content-Type': 'application/X-www-form-urlencoded', 'enctype': 'multipart/form-data' });
    const formData: FormData = new FormData();
    formData.append('UploadedImage', fileToUpload, fileToUpload.name);

    return this.http
      .post<any>(endpoint, formData);
  }





  changeListener($event): void {
    //this.readThis($event.target);
    this.spliter($event.target);
  }

  isCallBack(e) {
    //debugger;
    console.log(e);
  }
  spliter(inputValue: any): void {
    let self = this;
    let fContent: IFileContent = {};
    var blobs = [], result, base;
    var fr = new FileReader(), buf, file: File = inputValue.files[0];
    fr.onload = function (e) {
      debugger;
      // buf = new Uint8Array(e.target.result);
    };
    fr.onloadend = function (e) {
      // result = fr.result;
      // for (var i = 0; i < buf.length; i += 1e6){
      //   blobs.push(new Blob([buf.subarray(i, i + 1e6)]));
      //   console.log(base);
      // }
      // fContent.FileName = 'filename';
      // fContent.Value = buf;
      self.auth.setUpload(buf).subscribe(res => {
        console.log('success', res);
      }, err => {
        debugger;
        console.log('error', err);
      });
    };
    fr.readAsArrayBuffer(file);
    //fr.readAsBinaryString(file);
    // setTimeout(function(){


    // },10000);


  }

  // readThis(inputValue: any): void {
  //     let self = this;
  //     let fContent:IFileContent ={};
  //   var file:File = inputValue.files[0];
  //   //console.log('blob',file);
  //   // this.parseFile(file,function(e){
  //   //   self.isCallBack(e);
  //   // })
  //   var myReader:FileReader = new FileReader();

  //   myReader.onloadend = (e) => {
  //     this.image = myReader.result;
  //     //let arr = this.image.split('/');
  //     this.image = this.image.replace('data:video/mp4;base64,','')
  //     //debugger;
  //     fContent.FileName="filemame";
  //     fContent.Value = this.image;
  //     self.auth.setUpload(fContent).subscribe(res=>{
  //         console.log('success',res);
  //     },err=>{
  //       debugger;
  //       console.log('error',err);
  //     });
  //     //console.log(this.image);
  //   }
  //   myReader.readAsDataURL(file);    
  //   // console.log(myReader);
  // }

  //    parseFile(file, callback) {
  //     var fileSize   = file.size;
  //     var chunkSize  = 64 * 1024; // bytes
  //     var offset     = 0;
  //     var self       = this; // we need a reference to the current object
  //     var chunkReaderBlock = null;

  //     var readEventHandler = function(evt) {
  //         if (evt.target.error == null) {
  //             offset += evt.target.result.length;
  //             callback(evt.target.result); // callback for handling read chunk
  //         } else {
  //             console.log("Read error: " + evt.target.error);
  //             return;
  //         }
  //         if (offset >= fileSize) {
  //             console.log("Done reading file");
  //             return;
  //         }

  //         // of to the next chunk
  //         chunkReaderBlock(offset, chunkSize, file);
  //     }

  //     chunkReaderBlock = function(_offset, length, _file) {
  //         var r = new FileReader();
  //         var blob = _file.slice(_offset, length + _offset);
  //         r.onload = readEventHandler;
  //         r.readAsText(blob);
  //     }

  //     // now let's start the read with the first block
  //     chunkReaderBlock(offset, chunkSize, file);
  // }
}