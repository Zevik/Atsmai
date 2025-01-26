// ...existing code...
<label className="flex flex-col">
  אימייל:
  <input
    type="email"
    {...register('email', { required: true })}
    className="border border-gray-300 p-2 rounded-md"
  />
  {errors.email && <span className="text-red-500">שדה חובה</span>}
</label>

// ...existing code...
<label className="flex flex-col">
  טלפון:
  <input
    type="tel"
    {...register('phone', { required: true })}
    className="border border-gray-300 p-2 rounded-md"
  />
  {errors.phone && <span className="text-red-500">שדה חובה</span>}
</label>
// ...existing code...
