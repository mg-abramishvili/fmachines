@extends('layouts.front')
@section('content')
    <div class="page vhs">
        <div class="container">
            <h1 class="title-head">VHS</h1>

            @forelse($videos as $video)
                <div class="vhs-list-item">
                    <video src="{{ $video->video }}" controls controlsList="nodownload noplaybackrate" disablePictureInPicture ></video>
                    <p>
                        @if(app()->getLocale() == 'en')
                            {{ $video->name_eng }}
                        @else
                            {{ $video->name }}
                        @endif
                    </p>
                </div>
            @empty
                <p>Раздел пуст.</p>
            @endforelse
        </div>
    </div>
@endsection