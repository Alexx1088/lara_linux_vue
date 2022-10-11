@extends('layouts.app')

@section('content')
<index></index>
@endsection
<script>
    import Index from "../js/components/Index";
    export default {
        components: {Index}
    }
</script>
