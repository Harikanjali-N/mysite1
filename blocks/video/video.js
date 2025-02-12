document.addEventListener("DOMContentLoaded", function () {
    const videoContainer = document.querySelector(".video.block");

    if (videoContainer) {
      
        const driveFileId = "1ckRrGydMslBiewh0IsCwBeER65Y58aKL";

        
        const driveEmbedUrl = `https://drive.google.com/file/d/${driveFileId}/preview`;

        
        const iframe = document.createElement("iframe");
        iframe.src = driveEmbedUrl;
        iframe.width = "640";  
        iframe.height = "360"; 
        iframe.allow = "autoplay";
        iframe.frameBorder = "0";
        iframe.allowFullscreen = true;

        
        videoContainer.appendChild(iframe);
    }
});
