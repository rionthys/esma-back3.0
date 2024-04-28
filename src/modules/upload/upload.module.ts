import {Module} from '@nestjs/common';
import {MulterModule} from '@nestjs/platform-express';
import {UploadController} from "./upload.controller";
import {diskStorage} from "multer";
import {extname} from 'path';

@Module({
    imports: [
        MulterModule.register({
            storage: diskStorage({
                destination: './uploads',
                filename: (req, file, callback) => {
                    const newFileName = `${new Date().getTime()}${extname(file.originalname)}`;
                    callback(null, newFileName);
                },
            }),
        }),
    ],
    controllers: [UploadController]
})
export class UploadModule {
}
  