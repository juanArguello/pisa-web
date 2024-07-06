import { Injectable } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Injectable({
	providedIn: 'root'
})
export class BrowserDetectorService {

	constructor(private deviceService: DeviceDetectorService) { }

	public isMobile(): boolean {
		return this.deviceService.isMobile();
	}

	public isDesktop(): boolean{
		return this.deviceService.isDesktop();
	}

	
}
