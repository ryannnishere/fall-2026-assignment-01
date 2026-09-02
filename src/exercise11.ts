import fs from 'fs';

export async function logStatusToFile(
  filePath: string,
  statusMessage: string,
): Promise<void> {
    const timestamp = new Date().toISOString();
    const line = `${statusMessage} ${timestamp}\n`;

    await fs.promises.appendFile(filePath, line);
}
