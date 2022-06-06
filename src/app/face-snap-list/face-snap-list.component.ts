import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit {

  faceSnaps!: FaceSnap[];
  faceSnaps$!: Observable<FaceSnap[]>

  constructor(private FaceSnapsService: FaceSnapsService) { }

  ngOnInit(): void {
    this.faceSnaps$ = this.FaceSnapsService.getAllFaceSnaps();
  }

}
