import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewProductService } from '../../services/new-product.service';
NewProductService

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrl: './new-product.component.css'
})
export class NewProductComponent implements OnInit {

  newProduct: FormGroup;
  errorMessage: string[] = [];
  image: File | null | string | ArrayBuffer = null;
  imageUrl: string | ArrayBuffer | null = '';
  manufacturers = [{ id: 0, option: '...' }]
  categories = [{ id: 0, option: '...' }]

  constructor(
    private fb: FormBuilder,
    private newProductService : NewProductService
  ) { }

  ngOnInit() {
    this.newProduct = this.fb.group({
      sku: ['', Validators.required],
      name: ['', Validators.required],
      image: ['', Validators.required],
      selectedIdCategory: ['0', Validators.required],
      selectedIdMaker: ['0', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required]
    })

    this.newProductService.getManufacturers().subscribe({
      next:(response)=> this.manufacturers.push(response),
      error:(error)=> console.error(error)
    })
  }

  send(): void {
    if (this.newProduct.valid) {
      let {selectedIdCategory, selectedIdMaker} = this.newProduct.value
      if(selectedIdCategory != 0 && selectedIdMaker != 0){
        
      }
      alert(`Please choose a provider and/or a category`);
    } else {
      this.checkInvalidParam()
      let errorMessageList = this.errorMessage.join("\n- ");
      alert(`Please correct the following errors:\n- ${errorMessageList}`);
      this.errorMessage = []
    }
  }

  checkInvalidParam() {
    Object.keys(this.newProduct.controls).forEach(key => {
      const control = this.newProduct.get(key);
      console.log(key)
      if (control && control.invalid) {
        this.errorMessage.push(`The parameter ' ${key} ' is not valid.`);
      }
    });
  }

  onFileDropped(event: any) {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    this.handleFileInput(file);
  }

  fileBrowseHandler(event: any) {
    const file = event.target.files[0];
    this.handleFileInput(file);
  }

  async handleFileInput(file: File) {
    if (file && file.type.startsWith('image/')) {
      if (file.size <= 5242880) { // 5 MB in bytes
        try {
          const base64 = await this.newProductService.convertToBase64(file);
          this.image = base64;
          this.newProduct.patchValue({ image: base64 });
          this.previewImage(file);
        } catch (error) {
          this.errorMessage.push('Error converting file to base64');
          this.clearImage();
        }
      } else {
        this.errorMessage.push('The file size exceeds the 5 MB limit.');
        this.clearImage();
      }
    } else {
      this.errorMessage.push('Only image files are allowed.');
      this.clearImage();
    }
  }

  previewImage(file: File) {
    const reader = new FileReader();
    reader.onload = (e) => {
      this.imageUrl = e.target?.result ?? '';
    };
    reader.readAsDataURL(file);
  }

  clearImage() {
    this.image = null;
    this.imageUrl = '';
    this.newProduct.patchValue({ image: null });
  }

  removeImage() {
    this.clearImage();
  }

}
