import {singleton} from "tsyringe";
import {Security} from "../core/port/utils/security.utils";
import {Logger} from "../core/port/infrastructure";
import * as crypto from 'crypto';

@singleton()
export class SecurityMd5Impl implements Security {
    private salt: string = '';
    private iterations: number = 0;

    constructor(private logger: Logger) {
        this.salt = process.env.MD5_SALT ?? crypto.randomBytes(128).toString('base64');
        const iter = parseInt(process.env.MD5_ITERATIONS);
        this.iterations = iter > 0 ? iter : 1000;
    }

    /**
     * Hashing given string
     * @param value
     */
    async hash(value: string): Promise<string> {
        return crypto.pbkdf2Sync(value, this.salt, this.iterations, 128, 'sha256').toString('hex');
    }

    /**
     * Verify hashed value
     * @param plain
     * @param hashed
     */
    async verify(plain: string, hashed: string): Promise<boolean> {
        const pHash = await this.hash(plain);
        return crypto.timingSafeEqual(Buffer.from(pHash), Buffer.from(hashed))
    }
}
