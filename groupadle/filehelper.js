export async function load() {
    return new Promise((resolve, reject) => {
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = 'image/*';
        fileInput.style.display = 'none';

        fileInput.addEventListener('change', async (event) => {
            const file = event.target.files[0];
            if (file) {
                try {
                    const base64 = await convertImageToPNGBase64(file);
                    console.log(base64);
                    resolve(base64);
                } catch (error) {
                    reject(error);
                }
            } else {
                reject(new Error('No file selected'));
            }
        });

        fileInput.click();
    });
}

export function load0() {
    return load();
}

async function convertImageToPNGBase64(file) {
    const img = await loadImage(file);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0);

    return canvas.toDataURL('image/png');
}

function loadImage(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
            const img = new Image();
            img.onload = () => resolve(img);
            img.onerror = reject;
            img.src = reader.result;
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}
