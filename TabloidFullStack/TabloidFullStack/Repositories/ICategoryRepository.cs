﻿using TabloidFullStack.Models;

namespace TabloidFullStack.Repositories
{
    public interface ICategoryRepository
    {
        List<Category> GetAll();
        void Add(Category category);

        Category GetById(int id);

        void Delete(int id);
    }
}