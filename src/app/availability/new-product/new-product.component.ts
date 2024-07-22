import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { Manufacturer } from '../../interfaces/manufacturers.interface'
import { onlyNumbers } from '../../validators/onlyNumber';
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
  manufacturers:Manufacturer[] = []
  categories = [{ id: 0, option: 'ACC' }]

  constructor(
    private fb: FormBuilder,
    private productService : ProductService
  ) { 
    this.productService.getManufacturers().subscribe({
      next: (resp)=> resp.forEach((manufacturer: any) => this.manufacturers.push({id :manufacturer.id, razon_social: manufacturer.razon_social})),
      error: (error)=> console.error(error)
    })
  }

  ngOnInit() {
    this.newProduct = this.fb.group({
      sku: ['', Validators.required],
      name: ['', Validators.required],
      image: ['', Validators.required],
      selectedIdCategory: ['', Validators.required],
      selectedIdMaker: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', [Validators.required, onlyNumbers()]]
    })

  }

  send(): void {
    if (this.newProduct.valid) {
      const body = {
        sku: this.newProduct.get('sku')?.value,
        nombre: this.newProduct.get('name')?.value,
        imagen: this.newProduct.get('image')?.value,
        descripcion: this.newProduct.get('description')?.value,
        precio: this.newProduct.get('price')?.value,
        fabricante: this.newProduct.get('selectedIdMaker')?.value,
        categoria: this.newProduct.get('selectedIdCategory')?.value
      }

      this.productService.createProduct([body]).subscribe({
        next: (resp)=> alert('Product created correctly'),
        error: (error)=> alert('Product could not be created')
      })

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
          const base64 = await this.productService.convertToBase64(file);
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

  validateNumberInput(event: KeyboardEvent) {
    const inputChar = event.key;
    if (!/^\d$/.test(inputChar)) {
      event.preventDefault();
    }
  }

}
