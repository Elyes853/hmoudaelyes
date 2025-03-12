import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  email = "elyes.hmouda@gmail.com";


  downloadCV() {
    // Specify the path to your static file
    const filePath = "assets/Elyes Hmouda's CV.pdf"; // Replace with the actual path

    // Create a link element
    const link = document.createElement('a');
    link.href = filePath;
    link.download = "Elyes Hmouda's CV.pdf"; // Specify the filename for the download

    // Trigger the download
    link.click();
  }

  openLinkedIn(): void {
    const linkedInUrl = 'https://www.linkedin.com/in/elyes-hmouda/';
    window.open(linkedInUrl, '_blank');
  }

  protected readonly open = open;
}
