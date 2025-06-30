using System;
using CloudinaryDotNet.Actions;

namespace API.Interfaces;

public interface IPhotoservice
{
    Task<ImageUploadResult> AddPhotoAsync(IFormFile file);
    Task<DeletionResult> DeletePhotoAsync(string publicId);
}
