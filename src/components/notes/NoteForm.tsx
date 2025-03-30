import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import React from 'react'

const schema = yup.object().shape({
  title: yup.string().required('Title is required'),
  content: yup.string().required('Content is required'),
  tags: yup.array().of(yup.string())
})

interface NoteFormProps {
  onSubmit: (data: any) => void;
  initialData?: { title: string; content: string; tags?: string[] };
  onCancel: () => void;
}

export const NoteForm: React.FC<NoteFormProps> = ({ onSubmit, initialData, onCancel }) => {
  const { register, handleSubmit, formState: { errors }, setValue } = useForm({
    resolver: yupResolver(schema)
  })

  React.useEffect(() => {
    if (initialData) {
      setValue('title', initialData.title)
      setValue('content', initialData.content)
    }
  }, [initialData, setValue])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('title')} />
      {errors.title && <span>{errors.title.message}</span>}
      
      <textarea {...register('content')} />
      {errors.content && <span>{errors.content.message}</span>}
      
      <button type="submit">Save</button>
      <button type="button" onClick={onCancel}>Cancel</button>
    </form>
  )
}